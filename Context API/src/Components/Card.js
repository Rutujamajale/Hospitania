import React, { useContext } from "react";
import { CardCountContext } from "../Context/CardCountContext";

const Card = () => {
	const { count, setCount } = useContext(CardCountContext);

	return (
		<div className="card">
			<h3>Product Name</h3>
			<button onClick={() => setCount(count + 1)}>Add To Cart</button>
		</div>
	);
};

export default Card;
