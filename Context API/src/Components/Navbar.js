import React, { useContext } from "react";
import { CardCountContext } from "../Context/CardCountContext";

const Navbar = () => {
	const { count, setCount } = useContext(CardCountContext);
	// const { count, setCount } = useContext(LoginContext);
	// const { count, setCount } = useContext(ThirdContext);

	return (
		<div className="navbar">
			<div className="logo">LOGO</div>
			<div className="others">AboutUs</div>
			<div className="cart">Cart: {count}</div>
		</div>
	);

	// return (
	// 	<ThirdContext.Consumer>
	// 		{(context) => (
	// 			<LoginContext.Consumer>
	// 				{(context1) => (
	// 					<CardCountContext.Consumer>
	// 						{(context) => (
	// 							<div className="navbar">
	// 								<div className="logo">LOGO</div>
	// 								<div className="others">
	// 									AboutUs {context1.login}
	// 								</div>
	// 								<div className="cart">
	// 									Cart:{context.count}
	// 								</div>
	// 							</div>
	// 						)}
	// 					</CardCountContext.Consumer>
	// 				)}
	// 			</LoginContext.Consumer>
	// 		)}
	// 	</ThirdContext.Consumer>
	// );
};

export default Navbar;
