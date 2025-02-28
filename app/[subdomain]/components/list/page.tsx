import { Fragment } from "react";
import './list.css';

export default function List(params: any) {

    return (
        <Fragment>
            <ul id="myUL">
                <li>Hit the gym</li>
                <li>Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
            </ul>
        </Fragment>

    )
}