import React from "react";
import PortfolioData from "../data/PortfolioData";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                { PortfolioData.map(project => (
                    <PortfolioItem 
                        imageUrl = { project.ImageUrl }
                        title = { project.Title }
                        stack = { project.Stack }
                        link = { project.Link } 
                    />
                )) }
            </div>
        </div>
    )
}

export default Portfolio;