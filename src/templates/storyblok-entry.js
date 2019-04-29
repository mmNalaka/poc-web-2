import React from "react"
import Components from "../components/components.js"

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    const layout = Object.assign({}, props.pageContext.layout)

    story.content = JSON.parse(story.content)
    layout.content = JSON.parse(layout.content)

    return { story, layout }
  }

  constructor(props) {
    super(props)

    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    let content = this.state.story.content
    let layout = this.state.layout.content

    return (
      <React.Fragment>

        {layout.header && React.createElement(Components[layout.header[0].component], {
          key: layout.header[0]._uid,
          blok: layout.header[0],
          headerTheme: this.props.pageContext.headerTheme,
        })}

        <div>
          {React.createElement(Components[content.component], {
            key: content._uid,
            blok: content,
          })}
        </div>

        {layout.footer && React.createElement(Components[layout.footer[0].component], {
          key: layout.footer[0]._uid,
          blok: layout.footer[0],
        })}
      </React.Fragment>
    )
  }
}

export default StoryblokEntry
