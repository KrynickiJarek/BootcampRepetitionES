// import React, {Component} from "react";
// import ReactDOM from "react-dom";
// import {Menu} from '../../../01_Podstawy/03_Zadanie_3/js/app'
//
// const DocHeader = () => {
//     return (
//         <header>
//             <a>Logo</a>
//             <Menu/>
//         </header>
//     )
// }
//
// const DocFooter = () => <footer>Copyright 2020</footer>;
//
// const PageContent = (props) => {
//     return (
//         <main>
//             {props.children}
//         </main>
//     )
// }
//
// const Template = ({children}) => {
//     return (
//         <>
//             <DocHeader/>
//             <PageContent>{children}</PageContent>
//             <DocFooter/>
//         </>
//     )
// }
//
// const AboutPage = () => {
//     return (
//         <Template>
//             <h1>About us</h1>
//             <h4>We are the best</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aliquam asperiores aspernatur atque
//                 commodi consequatur consequuntur culpa dolor dolores est exercitationem harum illo in inventore ipsam
//                 iusto laboriosam laudantium maiores minus natus pariatur, perferendis provident repellendus sapiente
//                 sed, sunt tempore tenetur veniam vero. Ad architecto consectetur culpa, dolor eius ex facere fugiat illo
//                 inventore ipsum magni maxime, necessitatibus nihil non odio omnis provident quasi qui quia quo
//                 repudiandae saepe sint sit soluta tempora unde vitae. Aliquid aspernatur corporis delectus ducimus, ea
//                 eligendi et explicabo fuga harum illum itaque laboriosam minima nobis optio possimus quam quo
//                 repellendus saepe totam voluptatibus. Accusamus aliquam animi aspernatur aut blanditiis consectetur
//                 cumque dignissimos dolore, dolorem doloremque dolorum esse eum, exercitationem expedita fugit harum
//                 ipsum iste libero magnam magni maiores minus nam necessitatibus nemo neque odit optio possimus provident
//                 quae quaerat quas tempore voluptatem voluptatibus? Ab architecto consequatur culpa deserunt dolore esse
//                 iure iusto nisi placeat praesentium quae, quam sequi soluta, sunt unde, vel voluptatem? Ab animi aperiam
//                 eveniet expedita facere molestiae nostrum officiis temporibus. Accusamus adipisci aliquam aperiam
//                 asperiores at autem consequuntur debitis deserunt dignissimos dolorem harum ipsam laborum laudantium
//                 magnam magni, maxime nihil quasi qui quisquam recusandae rerum sapiente vero voluptatum! Aliquid animi,
//                 atque consequatur corporis doloribus eos error esse ipsum iure laudantium maiores, porro praesentium
//                 quasi quo recusandae rem repellat rerum sint voluptates voluptatibus? Aliquam commodi expedita hic ipsum
//                 molestiae, perspiciatis quas, quasi repellat ullam ut vel vero! Ab accusantium architecto at, commodi
//                 consequatur et ex exercitationem expedita facilis in ipsum iste nam neque nobis non officia quasi
//                 quisquam recusandae repudiandae sed sint tempore ut, vel vero voluptatum. A accusamus eius facere id
//                 itaque nemo odio porro ratione rerum voluptates! Ad, aliquid aspernatur blanditiis deleniti dignissimos
//                 eaque, eius eveniet excepturi ipsa porro repudiandae voluptate? Eum labore molestias mollitia totam?
//                 Architecto aspernatur atque autem dicta dolorem eaque in, nemo omnis soluta velit. Dicta distinctio
//                 eaque earum facere tempora? Aspernatur assumenda aut esse non sunt, velit veniam! Aliquam aliquid dicta
//                 dolorem eaque earum facere, harum inventore iusto labore laborum libero, maiores minima nobis porro quod
//                 quos sunt tempora ut vitae voluptates! Cum eligendi hic id ipsa ipsum natus necessitatibus porro sit? A
//                 aperiam aut cupiditate eius eligendi error ex exercitationem fugit illo in inventore ipsam labore libero
//                 nihil nostrum omnis, porro quae qui quidem ratione similique, suscipit tempore voluptates? Accusantium
//                 ad alias aliquam aliquid atque blanditiis corporis debitis deserunt dicta distinctio dolorem, eligendi
//                 illo ipsa itaque mollitia nemo non obcaecati, placeat, quibusdam quisquam quo ratione rem similique
//                 temporibus voluptate. Accusantium amet cupiditate doloremque harum ipsam laudantium officiis qui quis
//                 quo reprehenderit? Adipisci animi at beatae corporis deserunt dicta distinctio dolor est eveniet
//                 expedita harum iusto labore magni minus natus nihil nisi non odit optio perferendis quod ratione
//                 reiciendis similique suscipit, ullam voluptatem voluptatum. Ab accusamus aliquid aut autem blanditiis
//                 commodi cum deleniti error eum, ex expedita explicabo hic id inventore molestias mollitia nobis
//                 provident quos repellendus sequi soluta tempore voluptatem. Deleniti dolore fugiat iure libero quod
//                 soluta, unde. Cumque ipsa iure optio quasi rem?</p>
//         </Template>
//     )
// }
//
//
//
// const App = () => {
//     return (
//         <AboutPage/>
//     )
// }
//
// ReactDOM.render(
//     <App/>,
//     document.getElementById("app")
// );


import React, {Component} from "react";
import ReactDOM from "react-dom";

const ParentComponent = (props) => {
    return (
        <ChildComponent>
            <div style={{border: "1px dashed blue"}}>
                <h1>Parent</h1>
                {props.children}
            </div>
        </ChildComponent>
    )
}


const ChildComponent = (props) => {
    return (
        <GrandchildComponent>
        <div style={{border: "1px dotted green"}}>
            <h3>Child</h3>
            {props.children}
        </div>
        </GrandchildComponent>
    )
}


const GrandchildComponent = (props) => {
    return (
        <>
            <div style={{border: "1px solid red"}}>
                <h6>Grandchild</h6>
                {props.children}
            </div>
        </>
    )
}

const App = () => {
    return (
        <ParentComponent>
            <p>To działa!</p>
        </ParentComponent>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById("app")
);


