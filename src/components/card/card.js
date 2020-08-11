import React from "react";
export default function Card(props) {
	return (
		<div class="card" style={{ width: "100%", border: "none"}}>
			<div>
				<img
					class="card-img-top"
					src={props.img}
					alt="Card image cap"
					style={{width:"70%"}}
				/>
			</div>
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text text-justify">
					{props.content}
				</p>
			</div>
		</div>
	);
}
