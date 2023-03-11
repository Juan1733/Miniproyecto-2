import React from "react";
import styles from "./PageNavigation.module.css"

export function PageNavigation() {
    return (
        <nav aria-label="Page navigation example">
            <ul className={`pagination ${styles.looks}`}>
                <li className="page-item"><a className="page-link text-white" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link text-white" href="#">1</a></li>
                <li className="page-item"><a className="page-link text-white" href="#">2</a></li>
                <li className="page-item"><a className="page-link text-white" href="#">3</a></li>
                <li className="page-item"><a className="page-link text-white" href="#">Next</a></li>
            </ul>
        </nav>
    );
}