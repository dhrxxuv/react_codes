import React from "react"
import Contact from "../Contact"
import { render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
test("should load contact component",()=>{

    render(<Contact/>)

    const heading = screen.getByText(/Get in Touch/); // Target by text
    expect(heading).toBeInTheDocument();
    
})