import React from "react";
class Profile extends React.Component {
	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-md-5 full-screen-md">
						<div class="head">
							<img class="avt" src="img/avt.jpg" alt="" height="150px" />
							<h3>PHAN VAN THANH</h3>
							<p>Website Developer</p>
						</div>
						<div class="basic-info">
							<div class="contact specific">
								<div class="title">
									<img
										class="mr-auto"
                                        src="img/profile/call.svg"
                                        alt=""
									/>
									<hr />
									<h4 class="ml-auto">CONTACT</h4>
								</div>
								<div class="hr"></div>

								<ul class="my-ul">
									<li>
										(84) 0986-9405-91{" "}
										<i class="fas fa-phone icon"></i>
									</li>
									<li>
										pvthanh98it@gmail.com{" "}
										<i class="fas fa-envelope icon"></i>
									</li>
									<li>
										https://thanhphan.cf{" "}
										<i class="fab fa-internet-explorer icon"></i>
									</li>
									<li>
										<a
											style={{color:"white"}}
											href="https://www.facebook.com/pvthanh98it"
										>
											facebook.com/pvthanh98it
										</a>{" "}
										<i class="fab fa-facebook icon"></i>
									</li>
									<li>
										@thanhphan98{" "}
										<i class="fab fa-instagram icon"></i>
									</li>
									<li>
										Ninh Kieu, Can Tho, Vietnam{" "}
										<i class="fas fa-map-marker-alt icon"></i>
									</li>
								</ul>
							</div>
							<div class="language specific">
								<div class="title">
									<img
										class="mr-auto"
                                        src="img/profile/language.svg"
                                        alt=""
									/>
									<h4 class="ml-auto">LANGUAGE</h4>
								</div>
								<div class="hr"></div>

								<ul class="my-ul">
									<li>English (fluency)</li>
									<li>Vietnames (native)</li>
								</ul>
							</div>

							<div class="skill specific">
								<div class="title">
									<img
										class="mr-auto"
                                        src="img/profile/skill.svg"
                                        alt=""
									/>
									<h4 class="ml-auto">SKILL</h4>
								</div>
								<div class="hr"></div>

								<ul class="my-ul ul-bar">
									<li>
										<div class="skill-title">
											NodeJS - 76%
										</div>
										<div class="bar">
											<div
												class="ability"
												style={{width:"26%"}}
											></div>
										</div>
									</li>
									<li>
										<div class="skill-title">
											Laravel/PHP - 86%
										</div>
										<div class="bar">
											<div
												class="ability"
												style={{width:"16%"}}
											></div>
										</div>
									</li>
									<li>
										<div class="skill-title">
											Bootstrap - 70%
										</div>
										<div class="bar">
											<div
												class="ability"
												style={{width:"30%"}}
											></div>
										</div>
									</li>
									<li>
										<div class="skill-title">
											Jquery - 75%
										</div>
										<div class="bar">
											<div
												class="ability"
												style={{width:"25%"}}
											></div>
										</div>
									</li>
									<li>
										<div class="skill-title">
											Java - 75%
										</div>
										<div class="bar">
											<div
												class="ability"
												style={{width:"25%"}}
											></div>
										</div>
									</li>
									<li>
										<div class="skill-title">
											Other (C#, Python, C/C++ ...) - 60%
										</div>
										<div class="bar">
											<div
												class="ability"
												style={{width:"40%"}}
											></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div
						class="col-md-7 detail-info"
						style={{backgroundColor: "#fff"}}
					>
						<div class="about specific">
							<div class="title mt-5">
								<h4 class="mr-auto right-title">ABOUT ME</h4>
								<img
									class="ml-auto"
                                    src="img/profile/user.svg"
                                    alt=""
								/>
							</div>
							<div class="hr-purple"></div>
							<p class="text-justify">
								Developing website fascinated me in thousands of
								ways. It makes me enjoy spending through hours
								on sitting in front of my computer to produce
								quality products or figure out new technology.
								It's greate if I become a versatile website
								developer in the future.
							</p>
						</div>
						<div class="education specific">
							<div class="title mt-5">
								<h4 class="mr-auto right-title">EDUCATION</h4>
								<img
									class="ml-auto"
                                    src="img/profile/education.svg"
                                    alt=""
								/>
							</div>
							<div class="hr-purple"></div>
							<h5 class="title-h">
								CAN THO UNIVERSITY (2016 – PRESENT)
							</h5>
							<ul class="my-ul">
								<li>Major: Information technology</li>
							</ul>
						</div>
						<div class="experience specific">
							<div class="title mt-5">
								<h4 class="mr-auto right-title">EXPERIENCE</h4>
								<img
									class="ml-auto"
                                    src="img/profile/experience.svg"
                                    alt=""
								/>
							</div>
							<div class="hr-purple"></div>
							<h5 class="title-h">
								Coding a blog website by NodeJS and MongoDB
							</h5>
							<p class="text-justify">
								This blog is divided into two parts - admin
								management and user interface. Some necessary
								features like adding, modifying, and deleting
								categories, tags, articles, and comments are
								integrated in admin management. In the user
								interface, there are showing home page, detail
								articles, and comment features. Let's visit it{" "}
								<a href="https://thanhphan.cf/blog">
									https://thanhphan.cf/blog
								</a>
								.
							</p>
							<h5 class="title-h">
								Simple Chat Application - NodeJS/SocketIO
							</h5>
							<p>Applying SocketIO to make a chat application.</p>
							<h5 class="title-h">
								Ecomerce website - Laravel/PHP{" "}
								<a href="http://tpside.herokuapp.com/">
									http://tpside.herokuapp.com/
								</a>
								.
							</h5>
							<p class="text-justify">
								Using bootstrap, Jquery, and Laravel framework
								to make a selling smartphone website with some
								outstanding features:
								<ul style={{marginLeft:"16px"}}>
									<li>Shopping cart</li>
									<li>Page permission</li>
									<li>CMS all data</li>
									<li>Searching</li>
									<li>...</li>
								</ul>
							</p>
							<h5 class="title-h">Google cloud computing</h5>
							<p class="text-justify">
								To deploy a NodeJS app, I find out and know the
								cloud computing of Google. I built a Ubuntu
								server and deploy my websites as well as
								applications on it
							</p>
							<h5 class="title-h">
								Communicating with foreigners
							</h5>
							<p class="text-justify">
								Join some English groups in my city. This makes
								me love English more and boost my English
								skills.
							</p>
						</div>
						<div class="about specific">
							<div class="title mt-5">
								<h4 class="mr-auto right-title">ACTIVITIES</h4>
								<img
									class="ml-auto"
                                    src="img/profile/soccer.svg"
                                    alt=""
								/>
							</div>
							<div class="hr-purple"></div>
							<p class="text-justify">
								Playing guitar, football or reading book is my
								fovorite hobbies. They help me to have close
								friends and make our relationship better.
								Besides, English seems to be part of my life to
								connect with people around more convinienly and
								easyly. Thank you for reading!
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
