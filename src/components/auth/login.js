import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Login(props) {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light custom-nav">
				<NavLink className="navbar-brand" to="/">
					<img src="/img/system.png" height="30px" /> Thanh Phan
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mr-auto ul-custom">
						<li className="nav-item active">
							<NavLink className="nav-link nav-link-custom"to="/">ABOUT</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink className="nav-link nav-link-custom"to="/">PRODUCTS{" "}</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link nav-link-custom" to="/">WEB{" "}</NavLink>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container">
				<div className="row">
					<div className="col-md-12 mt-2 text-center mt-3 mb-3">
						<img src="/img/man.png" height="110px" />
						<p className="text-center mt-2">
							Xin chào! Rất vui vì được gặp bạn tại đây - nơi chia
							sẽ đam mê, kiến thức về lập trình vì mục đích cùng nhau học tập tiến bộ
						</p>
					</div>
					<div className="col-md-3 col-6" style={{ textAlign: "center" }}>
						<div
							class="card"
							style={{ width: "100%", border: "none"}}
						>
							<img
								class="card-img-top"
								src="/img/book.png"
                                alt="Card image cap"
                                height="200px"
							/>
							<div class="card-body">
								<h5 class="card-title">Bạn là ai?</h5>
								<p class="card-text text-justify">
									Một kỹ sư hay một nhà thiết kế? Bạn đam mê cho chính công việc
                                    của mình. Hãy đến và chia sẽ với mọi người. Kiến thức lan tỏa và nhận lại nhiều hơn.
								</p>
							</div>
						</div>
					</div>
                    <div className="col-md-3 col-6" style={{ textAlign: "center" }}>
						<div
							class="card"
							style={{ width: "100%", border: "none"}}
						>
							<img
								class="card-img-top"
								src="/img/network.png"
                                alt="Card image cap"
                                height="200px"
							/>
							<div class="card-body">
								<h5 class="card-title">Kết nối với nhau</h5>
								<p class="card-text text-justify">
									Bạn yêu thích công nghệ thông tin? Bạn muốn kết nối với mọi người. Hãy đến đây và chia sẽ vấn
                                    đề của bạn! Nhớ tìm hiểu kỹ trước khi nhờ người khác nhé ^ ^.
								</p>
							</div>
						</div>
					</div>
                    <div className="col-md-3 col-6" style={{ textAlign: "center" }}>
						<div
							class="card"
							style={{ width: "100%", border: "none"}}
						>
							<img
								class="card-img-top"
								src="/img/web-development.png"
                                alt="Card image cap"
                                height="200px"
							/>
							<div class="card-body">
								<h5 class="card-title">Bạn thích lập trình web và di động?</h5>
								<p class="card-text text-justify">
									Nơi đây, thế mạnh của mọi người là các vấn đề về mobile và web. Tuy nhiên,
                                    cứ kiến thức hay thì share nhé! 
								</p>
							</div>
						</div>
					</div>
                    <div className="col-md-3 col-6" style={{ textAlign: "center" }}>
						<div
							class="card"
							style={{ width: "100%", border: "none"}}
						>
							<img
								class="card-img-top"
								src="/img/mega-ball.png"
                                alt="Card image cap"
                                height="200px"
							/>
							<div class="card-body">
								<h5 class="card-title">Giải trí thế nào nhĩ?</h5>
								<p class="card-text text-justify">
									Bóng đá, cầu lông, hay bóng chuyền? Nhớ tập luyện thể thao đều đặn để có được sức khỏe tốt hơn nhé.
								</p>
							</div>
						</div>
					</div>
				</div>
                <hr />
			</div>
		</div>
	);
}
