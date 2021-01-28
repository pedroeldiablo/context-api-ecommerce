import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"

// test utils file
export const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
  
    return render(ui, { wrapper: BrowserRouter })
  }
