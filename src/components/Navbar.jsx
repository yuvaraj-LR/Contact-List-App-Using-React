import React from 'react'

function Navbar() {
    return (
        <nav class="navbar nav_bg_color">
            <div class="container-fluid">
                <a class="navbar_logo">Navbar</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2 nav_form_input" type="search" placeholder="Search Name" aria-label="Search" />
                    <button class="btn bold carmel_outline_btn" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar