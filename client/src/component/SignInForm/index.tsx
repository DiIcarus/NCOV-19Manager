import React,{Component} from 'react';
import{ 
	Link,
	Route
} from "react-router-dom";
//style importer
// import * as style__ from './style';
//component importer
//utils importer
interface Props {
	isFormDisPlay: (status:boolean) => void,
	stateUser:boolean
}
type State = typeof initState;

const initState = {
  status: false as boolean
}
export default class SignInForm extends Component<Props,State>{
	state = initState

	formDisplay = () => {
        this.props.isFormDisPlay(!this.props.stateUser);
	}

	formRegisterDisplay = (status:boolean) => {
		this.setState({
			status
		})
	}

	formRegister = () => {
		return <Route path="/register">
					<div style={{position:"absolute", top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
						<form action="">
							<label> Họ và tên: <input type="text"/></label>
							<hr/>
							<label> CMND: <input type="text"/></label>
							<hr/>
							<label> Ngày sinh: <input type="text"/></label>
							<hr/>
							<label> Giới tính: <input type="text"/></label>
							<hr/>
							<label> Địa chỉ: <input type="text"/></label>
							<hr/>
							<label> Số điện thoại: <input type="text"/></label>
							<hr/>
							<label> Email: <input type="text"/></label>
							<hr/>
							<label>Password: <input type="password"/></label>
							<hr/>
							<span onClick={()=>this.formRegisterDisplay(!this.state.status)}>Đăng ký</span>
							<hr/>
							<span onClick={this.formDisplay}>Cancel</span>
						</form>
					</div>
				</Route>
	}

	formSignin = () => {
		return <div style={{position:"absolute", top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
				<form action="">
					<label> CMND: <input type="text"/></label>
					<hr/>
					<label>Password: <input type="password"/></label>
					<hr/>
					<Link to="/register" onClick={()=>this.formRegisterDisplay(!this.state.status)}>Bạn chưa có tài khoản ?</Link>
					<hr/>
					<span onClick={this.formDisplay}>Cancel</span>
				</form>
			</div>
	}

    render(){
      return (
	  	<>{this.state.status?this.formRegister():this.formSignin()}</>
	  )
    }
};