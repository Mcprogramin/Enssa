import React from "react";
import Testimonials from "@/partials/test";
import { getListPage } from "@/lib/contentParser";
const news = getListPage("news/index_news.md")
const school_news = () =>{
    return <>
    <div>
        <Testimonials data={news}/>
    </div>
    </>
}

export default school_news