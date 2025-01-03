import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

describe('Hero Component', () => {
    test("renders hero image",()=>{
        render(<Hero/>);
            const heroImage = screen.getByAltText("hero");
            expect (heroImage).toBeInTheDocument();

        
    });
    
});

