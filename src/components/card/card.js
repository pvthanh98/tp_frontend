import React from "react";
export default function Card(props) {
	return (
		<div class="card" style={{ width: "100%", border: "none" }}>
			<img
				class="card-img-top"
				src={props.img}
				alt="Card image cap"
				height="200px"
			/>
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text text-justify">
					{props.content}
				</p>
			</div>
		</div>
	);
}
