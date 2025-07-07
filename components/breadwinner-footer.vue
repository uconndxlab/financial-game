<template>
    <div id="footers">
        <footer id="mega-footer" class="widget-area">
            <div class="container">
                <div class="row">
                    <!-- <aside class="col-sm-6 ">
                        <div id="text-2" class="widget_text widget">
                            <div class="widget-head">
                                <h2 class="widget-title">Resources</h2>
                            </div>
                            <div class="textwidget">
                                <ul id="menu-quick-links" class="menu">
                                    <li
id="menu-item-33"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-33"><a
                                            class="external" href="http://extension.uconn.edu/" rel="noopener">UConn
                                            Extension</a></li>
                                    <li
id="menu-item-17"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17"><a
                                            class="external"
                                            href="https://americasaves.org/local-campaigns/connecticut-saves"
                                            rel="noopener">Connecticut Saves Campaign</a></li>
                                    <li
id="menu-item-19"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-19"><a
                                            class="external" href="https://cahnr.uconn.edu/extension/"
                                            rel="noopener">UConn Family and Community Development</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside> -->
                    <aside class="col-sm-6 ">
                        <div id="uc-contact-widget-4" class="uc-contact-widget widget">
                            <div class="widget-head">
                                <h2 class="widget-title">Contact Us</h2>
                            </div>
                            <div class="table-responsive">
                                <table class="uc-table table">
                                    <tbody>
                                        <tr class="uc-row">
                                            <th class="uc-label uc-label-phone v-icon mdi mdi-phone"></th>
                                            <td class="uc-output uc-output-phone"><a href="tel:+12034073160">(203) 407-3160</a></td>
                                        </tr>
                                        <tr class="uc-row">
                                            <th class="uc-label uc-label-email v-icon mdi mdi-email"></th>
                                            <td class="uc-output uc-output-email"><a
                                                    href="mailto:faye.griffiths-smith@uconn.edu">faye.griffiths-smith@uconn.edu</a>
                                            </td>
                                        </tr>
                                        <tr class="uc-row">
                                            <th class="uc-label uc-label-addr v-icon mdi mdi-map-marker"></th>
                                            <td class="uc-output uc-output-addr">305 Skiff Street<br>
                                                North Haven, CT 06473</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </footer>
        <footer id="footer" class="site-footer" role="contentinfo">
            <div class="container">
                <ul id="uc-footer-links" class="clearfix">
                    <li>
                        © <a href="http://uconn.edu">University of Connecticut</a>
                    </li>
                    <li>
                        <a href="http://uconn.edu/disclaimers-privacy-copyright/">Disclaimers, Privacy &amp;
                            Copyright</a>
                    </li>
                    <li>
                        <a href="https://accessibility.uconn.edu/">Accessibility</a>
                    </li>
                    <li>
                        <a href="https://financialliteracy.uconn.edu/wp-admin/">Webmaster Login</a>
                    </li>
                    <li
id="menu-item-316"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-316"><a
                            href="https://cahnr.uconn.edu/">CAHNR</a></li>
                    <li
id="menu-item-317"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-317"><a
                            href="https://cahnr.uconn.edu/extension">Extension</a></li>
                </ul>
            </div>
        </footer>
    </div>



</template>

<script>
export default {
    name: 'BreadwinnerFooter'
}

</script>

<style>
#footers {

    line-height: 1.428571429;
    color: #333333;
    font-family: "proxima nova", helvetica, arial;
    font-size: 16px;
    box-sizing: border-box;
    background-color: #212121;
    margin: 0;
    border: 0px solid transparent;
    border-color: #fff;
    border-width: 1px 0 0 0;
    padding-top: 0;
}

#mega-footer {

    line-height: 1.428571429;
    color: #333333;
    font-family: "proxima nova", helvetica, arial;
    font-size: 16px;
    box-sizing: border-box;
    display: block;
    padding-top: 1em;
    background-color: transparent;
}

#footer {

    line-height: 1.428571429;
    font-family: "proxima nova", helvetica, arial;
    font-size: 16px;
    box-sizing: border-box;
    display: block;
    padding: 1.5em 0;
    color: rgba(255, 255, 255, 0.7);
}

#footer a,
#mega-footer a {

    line-height: 1.428571429;
    font-family: "proxima nova", helvetica, arial;
    font-size: 16px;
    list-style-type: none;
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
}

.v-icon {
    color: #727272
}

#uc-footer-links {
    display: flex;
    gap: 3em;
    padding: 0;
    margin: 0;
}

h2.widget-title {
    box-sizing: border-box;
    font-weight: 500;
    line-height: 1.1;
    margin: 0;
    font-family: "proxima nova", sans-serif;
    text-transform: uppercase;
    color: white;
    font-size: 15px;
    letter-spacing: 0.2em;
    margin-bottom: 18px;
    font-style: normal;
}

#menu-quick-links {
    -webkit-text-size-adjust: 100%;
    line-height: 1.428571429;
    font-family: "proxima nova", helvetica, arial;
    font-size: 16px;
    color: #aaa;
    box-sizing: border-box;
    list-style-type: none;
    padding: 0;
    margin: 1em;
    margin-left: 0px;
}

#menu-quick-links li {

    line-height: 1.428571429;
    font-family: "proxima nova", helvetica, arial;
    font-size: 16px;
    color: #aaa;
    list-style-type: none;
    box-sizing: border-box;
    margin-bottom: .75em;
}

#mega-footer .widget.uc-contact-widget td {
    padding-left: 27px;
    position: relative;
    border: none !important;
    padding-top: 2px;
    color: #aaa !important
}
</style>