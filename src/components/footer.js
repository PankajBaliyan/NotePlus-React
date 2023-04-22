import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="iq-footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item"><a href="https://www.youtube.com/c/codewithpankaj1?sub_confirmation=1">YouTube</a></li>
                                <li class="list-inline-item"><a href="https://github.com/PankajBaliyan">GitHub</a></li>
                                <li class="list-inline-item"><a href="https://www.youtube.com/c/codewithpankaj1?sub_confirmation=1">Code With Pankaj</a></li>
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