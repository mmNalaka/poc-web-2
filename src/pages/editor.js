import React from "react"
import Components from "../components/components.js"
import SbEditable from "storyblok-react"
import config from "../../gatsby-config"

const loadStoryblokBridge = function(cb) {
  let sbConfigs = config.plugins.filter(item => {
    return item.resolve === "gatsby-source-storyblok"
  })
  let sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}
  let script = document.createElement("script")
  script.type = "text/javascript"
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${
    sbConfig.options.accessToken
  }`
  script.onload = cb
  document.getElementsByTagName("head")[0].appendChild(script)
}

const getParam = function(val) {
  var result = ""
  var tmp = []

  window.location.search
    .substr(1)
    .split("&")
    .forEach(function(item) {
      tmp = item.split("=")
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1])
      }
    })

  return result
}

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: null,
      layout: null,
      headerTheme: "default",
    }
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents()
    })
  }

  loadStory(payload) {
    window.storyblok.get(
      {
        slug: payload.storyId,
        version: "draft",
      },
      data => {
        if (data.story.content.component === "page") {
          const pathArray = data.story.full_slug.split("/")

          const dirPath = pathArray.length > 1 ? pathArray.slice(0, 1) : []

          const layoutPath = `${dirPath.join("/")}/${data.story.content.layout}`

          window.storyblok.get({ slug: layoutPath }, layoutPayload => {
            this.setState({
              story: data.story,
              layout: layoutPayload.story,
              headerTheme: data.story.content.headerTheme,
            })
          })
        } else {
          this.setState({ story: data.story, isLayout: true })
        }
      }
    )
  }

 initStoryblokEvents() {
    this.loadStory({ storyId: getParam("path") })

    let sb = window.storyblok

    sb.on(["change", "published"], payload => {
      this.loadStory(payload)
    })

    sb.on("input", payload => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        )
        this.setState({ story: payload.story })
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return <div />
    }

    let content = this.state.story.content
    let layoutContent = null

    if (this.state.layout) {
      layoutContent = this.state.layout.content
    }

    return (
      <React.Fragment>
        {layoutContent &&
          layoutContent.header &&
          React.createElement(Components[layoutContent.header[0].component], {
            key: layoutContent.header[0]._uid,
            blok: layoutContent.header[0],
            headerTheme: this.state.headerTheme,
          })}

        <SbEditable content={content}>
          {Components[content.component]
            ? React.createElement(Components[content.component], {
                key: content._uid,
                blok: content,
                inEditor: true,
              })
            : `Component ${content.component} not created yet`}
        </SbEditable>

        {layoutContent &&
          layoutContent.footer &&
          React.createElement(Components[layoutContent.footer[0].component], {
            key: layoutContent.footer[0]._uid,
            blok: layoutContent.footer[0],
          })}
      </React.Fragment>
    )
  }
}

export default StoryblokEntry
