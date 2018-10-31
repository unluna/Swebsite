import React from 'react'
import './SourceContainer.scss'
import SourceHotPoint from "./K-SouceHotPoint/SourceHotPoint"
import SourceNoteDiv from "./K-SourceNoteDiv/SourceNoteDiv"

export default class SourceContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <SourceHotPoint/>
                <SourceNoteDiv/>
            </div>

        )
    }
}
