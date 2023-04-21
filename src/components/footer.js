import React from 'react'

const Footer = () => {
    return (
        <>
            {/* <!-- Wrapper--> */}
            <footer class="iq-footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                                <li class="list-inline-item"><a href="#">Terms of Use</a></li>
                                <li class="list-inline-item"><a href="#">Code With Pankaj</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-6 text-right">
                            <span class="text-secondary mr-1">
                                <script>document.write(new Date().getFullYear())</script>©
                            </span> <a href="#" class="">NotePlus</a>.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;