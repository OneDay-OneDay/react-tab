import React from "react"
import ReactDOM from "react-dom"
import TabsControl from "./react_tab.jsx"

class TabComponent extends React.Component{
	render(  ){
		return(
			<div className="container">
				<TabsControl>
					<div name = "first">
						第一帧
					</div>
					<div name = "second">
						第二帧
					</div>
					<div name = "third">
						第三帧
					</div>
				</TabsControl>
			</div>
		)
	}
}

ReactDOM.render(<TabComponent/>,document.getElementById("app"))