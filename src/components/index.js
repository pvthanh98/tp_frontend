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
                        <div className="col-md-3 col-6" style={{ textAlign: "center" }}>
                            <Card title="Bạn là ai?" img="/img/book.png" content="Một kỹ sư hay một nhà thiết kế? Bạn đam mê cho chính công việc của mình. Hãy đến và chia sẽ với mọi người. Kiến thức lan tỏa và nhận lại nhiều hơn."  />
                        </div>
                        <div className="col-md-3 col-6" style={{ textAlign: "center" }}>
                            <Card title="Kết nối với nhau" img="/img/network.png" content="Bạn yêu thích công nghệ thông tin? Bạn muốn kết nối với mọi người. Hãy đến đây và chia sẽ vấn đề của bạn! Nhớ tìm hiểu kỹ trước khi nhờ người khác nhé ^ ^."  />
                        </div>
                        <div className="col-md-3 col-6" style={{ textAlign: "center" }}>
                            <Card title="Bạn thích lập trình web và di động?" img="/img/web-development.png" content="Nơi đây, thế mạnh của mọi người là các vấn đề về mobile và web. Tuy nhiên,cứ kiến thức hay thì share nhé!"  />
                        </div>
                        <div className="col-md-3 col-6" style={{ textAlign: "center" }}>
                            <Card title="Giải trí thế nào nhĩ?" img="/img/mega-ball.png" content="Bóng đá, cầu lông, hay bóng chuyền? Nhớ tập luyện thể thao đều đặn để có được sức khỏe tốt hơn nhé."  />  
                        </div>
                    </div>
                    <hr />
                </div>
		</div>
        );
    }
}

export default Index;