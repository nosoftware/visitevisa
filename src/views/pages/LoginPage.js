import React, { useState } from "react";
import PropTypes from 'prop-types';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import axios from "axios";

//const getLoginUrl = "http://localhost/admin/api/login";
const getLoginUrl = "http://my-demo.xyz/visa/api/login";



function LoginPage(props) {
	
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [token, setToken] = useState();
	const handleSubmit = async e => {
		e.preventDefault();
		//alert(`Submitting Name ${email}`);
		const res = await axios.get(getLoginUrl,{ params: { email: email, password: password }});
		console.log(res);
		const token = res.data.token;
		setToken(token);
		props.history.push('/profile');
		//setToken(token);
	}

	
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      {/* <ExamplesNavbar /> */}
		<IndexNavbar />
			<div className="page-header clear-filter" filter-color="blue">
				<div className="page-header-image" style={{ backgroundImage:"url(" + require("../../assets/img/login.jpg").default + ")", }} ></div>
					<div className="content">
						<Container>
							<Col className="ml-auto mr-auto" md="4">
								<Card className="card-login card-plain">
									<Form className="form" method="" onSubmit={handleSubmit}>
										<CardHeader className="text-center">
											<div className="logo-container">
												<img alt="..." src={require("../../assets/img/now-logo.png").default} ></img>
											</div>
										</CardHeader>
										<CardBody>
										
											<InputGroup className={"no-border input-lg" + (firstFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText><i className="now-ui-icons users_circle-08"></i></InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Email..." type="text" onFocus={() => setFirstFocus(true)} onBlur={() => setFirstFocus(false)} value={email} onChange={e => setEmail(e.target.value)} ></Input>
											</InputGroup>
											<InputGroup className={ "no-border input-lg" + (lastFocus ? " input-group-focus" : "")} >
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="now-ui-icons text_caps-small"></i>
													</InputGroupText>
												</InputGroupAddon>
												<Input placeholder="Password..." type="text" onFocus={() => setLastFocus(true)} onBlur={() => setLastFocus(false)} value={password} onChange={e => setPassword(e.target.value)} ></Input>
											</InputGroup>
										</CardBody>
										<CardFooter className="text-center">
											<Button type="submit" className="btn-round" color="info"  size="lg" >Login</Button>
											<div className="pull-left">
												<h6>
													<a className="link" href="#pablo" onClick={(e) => e.preventDefault()} >Create Account</a>
												</h6>
											</div>
											<div className="pull-right">
												<h6><a className="link" href="#pablo" onClick={(e) => e.preventDefault()} >Need Help?</a>
												</h6>
											</div>
										</CardFooter>
									</Form>
								</Card>
							</Col>
						</Container>
					</div>
       
				</div>
			<DefaultFooter />
    </>
  );
}

export default LoginPage;
