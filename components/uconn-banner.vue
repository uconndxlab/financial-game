<template>
    <div id="uconn-banner">

        <div id="uconn-header-container">

            <div class="row-container">
                <div class="row-fluid">
                    <div id="home-link-container">
                        <a id="home-link" href="https://uconn.edu/">
                            <span id="wordmark" aria-hidden="true">UConn</span>
                            <span id="university-of-connecticut">
                                University of Connecticut
                            </span>
                        </a>
                    </div>

                    <div id="button-container">
                        <div id="icon-container-search" class="icon-container">
                            <a id="uconn-search" class="btn" href="https://uconn.edu/search">
                                <span class="no-css">Search University of Connecticut</span>

                                <svg
version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32"
                                    aria-hidden="true" class="banner-icon">
                                    <title>Search UConn</title>
                                    <path
                                        d="M28.072 24.749l-6.046-6.046c0.912-1.499 1.437-3.256 1.437-5.139 0-5.466-4.738-10.203-10.205-10.203-5.466 0-9.898 4.432-9.898 9.898 0 5.467 4.736 10.205 10.203 10.205 1.818 0 3.52-0.493 4.984-1.349l6.078 6.080c0.597 0.595 1.56 0.595 2.154 0l1.509-1.507c0.594-0.595 0.378-1.344-0.216-1.938zM6.406 13.258c0-3.784 3.067-6.853 6.851-6.853 3.786 0 7.158 3.373 7.158 7.158s-3.067 6.853-6.853 6.853-7.157-3.373-7.157-7.158z">
                                    </path>
                                </svg>
                            </a>
                            <!-- Content provided by css -->
                            <div id="uconn-search-tooltip"></div>
                        </div>
                        <div id="icon-container-az" class="icon-container">

                            <a id="uconn-az" class="btn" href="https://uconn.edu/az">
                                <span class="no-css">A to Z Index</span>
                                <svg
version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32"
                                    aria-hidden="true" class="banner-icon">
                                    <title>UConn A to Z Search</title>
                                    <path
                                        d="M5.345 8.989h3.304l4.944 13.974h-3.167l-0.923-2.873h-5.147l-0.946 2.873h-3.055l4.989-13.974zM5.152 17.682h3.579l-1.764-5.499-1.815 5.499zM13.966 14.696h5.288v2.56h-5.288v-2.56zM20.848 20.496l7.147-9.032h-6.967v-2.474h10.597v2.341l-7.244 9.165h7.262v2.466h-10.798v-2.466h0.004z">
                                    </path>
                                </svg>
                            </a>
                            <!-- Content provided by css -->
                            <div id="uconn-az-tooltip"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <header id="masthead" class="site-header " role="banner">
            <div id="site-title" class="hidden-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <div id="uc-site-header" class="site-branding">
                                <p id="uc-site-parent"><a href="https://financialliteracy.uconn.edu/">UConn Extension
                                        Financial Education and Literacy</a></p>
                                <h1 id="uc-site-title"><a href="/" rel="home">Breadwinner Game</a></h1>
                            </div>
                        </div>

                        <div class="col-sm-4 header-widget-area">
                            <div id="tooltip-wrapper" class="text-center d-flex align-center justify-space-around">
                                <v-tooltip left color="red" attach="#tooltip-wrapper">
                                    <template #activator="{ on, attrs }">
                                        <v-btn
outlined v-bind="attrs" href="https://financialliteracy.uconn.edu/"
                                            v-on="on">
                                            <v-icon left>mdi-arrow-left-thin</v-icon>
                                            Return
                                        </v-btn>
                                    </template>
                                    <span>Back to the Financial Education and Literacy website</span>
                                </v-tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    </div>

</template>

<script>
export default {}
</script>

<style>

header {

    line-height: 1.428571429;
    color: #333333;
    font-family: "Proxima Nova", helvetica, arial;
    font-size: 16px;
    box-sizing: border-box;
    display: block;
    z-index: 9999;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    background: #fff;
}

#primary-nav ul {
    display: flex;
}

#primary-nav a {
    font-family: "Proxima Nova", helvetica, arial;
    font-size: 16px;
    list-style: none;
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none !important;
    position: relative;
    display: block;
    padding: 10px 15px;
    line-height: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 500;
    color: #1e1e1e;
}

#primary-nav a:hover {

    font-family: "Proxima Nova", helvetica, arial;
    font-size: 16px;
    list-style: none;
    box-sizing: border-box;
    outline: 0;
    position: relative;
    display: block;
    padding: 10px 15px;
    line-height: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 500;
    color: #071a38;
    background-color: transparent;
}

#primary-nav a::before, #primary-nav a::after {
    left: 0;
    width: 0;
    overflow:hidden;
    transition: width 300ms ease-in-out;
    content: '';
    height: 3px;
    bottom: 8px;
    position: absolute;
    background-color: #69ac5f;

}
#primary-nav a::after {
    left:auto;
    right: 0 !important
}

#primary-nav a:hover::before, #primary-nav a:hover::after {
    width: 50%;
}


#uc-site-parent {

    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1em;
    line-height: 1em;
    color: black;
    font-style: normal;
    font-weight: normal;
    border: 0;
    font-family: "Proxima Nova", Helvetica, Arial, sans-serif;
    margin-bottom: 5px;
    
}
#uc-site-parent a {
    text-decoration:none!important;
    box-sizing: border-box;
    background-color: transparent;
    padding: 0;
    margin: 0;
    line-height: 1em;
    font-style: normal;
    font-weight: normal;
    border: 0;
    font-family: "Proxima Nova", Helvetica, Arial, sans-serif;
    font-size: 13px !important;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1c1c1c !important;
}

#uc-site-title {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1em;
    line-height: 1em;
    color: black;
    font-style: normal;
    font-weight: normal;
    border: 0;
    font-family: "Proxima Nova", Helvetica, Arial, sans-serif;
    padding-bottom: 20px;
}

#uc-site-title a {

    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    padding: 0;
    margin: 0;
    line-height: 1em;
    font-style: normal;
    border: 0;
    font-family: "Proxima Nova", Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 100%;
    color: #1e1e1e !important;
}

#uc-site-title a:hover,#uc-site-parent a:hover {
    text-decoration:underline!important;
}

#uc-site-header {
    /* padding-left: 8px; */
    padding-top: 30px;
}

.col-sm-8 {
    padding: 0;
}
#dropdown {
    padding: 0
}

#menu-top-nav li:first-child > a{
    padding-left: 0;
}

.header-widget-area {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
}
</style>
