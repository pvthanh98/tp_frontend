import React from 'react';
import { NavLink } from "react-router-dom";
import Card from './card/card'
import Nav from './nav/nav'
class Index extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-2 text-center mt-3 mb-3">
                            <img src="/img/man.png" height="110px" />
                            <p className="text-center mt-2">
                                Xin chào! Rất vui vì được gặp bạn tại đây - nơi chia
                                sẽ đam mê, kiến thức về lập trình vì mục đích cùng nhau học tập tiến bộ
                            </p>
                        </div>
                        <div className="col-md-3 mt-3" style={{ textAlign: "center" }}>
                            <Card title="Bạn là ai?" img="/img/book.png" content="Một kỹ sư hay một nhà thiết kế? Bạn đam mê cho chính công việc của mình. Hãy đến và chia sẽ với mọi người. Kiến thức lan tỏa và nhận lại nhiều hơn."  />
                        </div>
                        <div className="col-md-3 mt-3" style={{ textAlign: "center" }}>
                            <Card title="Kết nối với nhau" img="/img/network.png" content="Bạn yêu thích công nghệ thông tin? Bạn muốn kết nối với mọi người. Hãy đến đây và chia sẽ vấn đề của bạn! Nhớ tìm hiểu kỹ trước khi nhờ người khác nhé ^ ^."  />
                        </div>
                        <div className="col-md-3 mt-3" style={{ textAlign: "center" }}>
                            <Card title="Bạn thích lập trình web và di động?" img="/img/web-development.png" content="Nơi đây, thế mạnh của mọi người là các vấn đề về mobile và web. Tuy nhiên,cứ kiến thức hay thì share nhé!"  />
                        </div>
                        <div className="col-md-3 mt-3" style={{ textAlign: "center" }}>
                            <Card title="Giải trí thế nào nhĩ?" img="/img/mega-ball.png" content="Bóng đá, cầu lông, hay bóng chuyền? Nhớ tập luyện thể thao đều đặn để có được sức khỏe tốt hơn nhé."  />  
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-8 mt-3" >
                        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                            <ul class="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ul>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/img/app.jpg" style={{height:"500px"}} class="d-block w-100" alt="..." /> 
                                </div>
                                <div class="carousel-item">
                                    <img src="/img/webdesign.jpg" style={{height:"500px"}} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="/img/ux.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                            </div>

                        </div>
                        <div className="col-md-4 mt-3">
                            <div class="media mt-2">
                                <img src="/img/bar-chart.png" style={{height:"80px"}} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0">Media heading</h5>
                                        Tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                                <hr />
                            </div>
                            <div class="media mt-2">
                                <img src="/img/smartphone.png" style={{height:"80px"}} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0">Media heading</h5>
                                        Tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                                <hr />
                            </div>
                            <div class="media mt-2">
                                <img src="/img/blockchain.png" style={{height:"80px"}} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0">Media heading</h5>
                                        Tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                                <hr />
                            </div>
                            <div class="media mt-2">
                                <img src="/img/brain.png" style={{height:"80px"}} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0">Media heading</h5>
                                        Tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
		</div>
        );
    }
}

export default Index;