var React=require("react");
var ReactDOM=require("react-dom");
require("../css/style.css");

class TabsControl extends React.Component{

	constructor(){
		super();
		this.state={ 
			currentIndex : 0
		};
	}

	check_tittle_index(index){
		return index===this.state.currentIndex ? "Tab_tittle active" : "Tab_tittle";
	}

	check_item_index(index){
		return index===this.state.currentIndex ? "Tab_item show" : "Tab_item";
	}

	render(){
		let _this=this;
		return(
			<div>
				{/*动态生成Tab导航*/}
				<div className="Tab_tittle_wrap">
					{ React.Children.map( this.props.children , (element,index) => {
						return(
							/*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
							<div onClick={ () => { this.setState({currentIndex : index}) } } className={ this.check_tittle_index(index) }>{ element.props.name }</div>
							);
					}) }
				</div>
				{/*Tab内容区域*/}
				<div className="Tab_item_wrap">
					{React.Children.map(this.props.children,(element,index)=>{
						return(
							<div className={ this.check_item_index(index) }>{ element }</div>
							);
					})}
				</div>
			</div>
			);
	}
}

class TabComponent extends React.Component{

	render(){
		return(
			<div className="container">
				<TabsControl>
					<div name="first">
						我是第一帧
					</div>
					<div name="second">
						我是第二帧
					</div>
					<div name="third">
						我是第三帧
					</div>
				</TabsControl>
			</div>
			);
	}
}

ReactDOM.render(<TabComponent/>,document.getElementById("app"));