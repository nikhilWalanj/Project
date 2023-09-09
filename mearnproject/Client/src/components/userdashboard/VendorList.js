
import React, { useEffect, useState } from "react"
import Header from "../Header"
import axios from "axios";
import Logo from "../Logo"
import Bottom from "../Bottom"

const VendorList = () => {
    const [user, setUser] = useState('')
    const [vendors, setVendors] = useState([]);
    const [token, setToken] = useState('');
    function fetchVendors(tokens) {
        axios.get("http://localhost:3000/api/get-vendors", { headers: { "Authorization": `Bearer ${tokens}` } })
            .then((res) => {
                setVendors(res.data.data);
                console.log(res.data.data);
            })
    }
    useEffect(() => {
        const info = JSON.parse(localStorage.getItem('user'));
        const infot = localStorage.getItem('token');
        setUser(info);
        // setToken(token);
        fetchVendors(infot);
    }, [])
    return (
        <React.Fragment>
            <Header />
            <section class="dashboard section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1 col-lg-4 offset-lg-0">
                            <div class="sidebar">
                                <div class="widget user-dashboard-profile">
                                    <h2>Profile</h2>
                                    <h5 class="text-center">{user.name}</h5>
                                    <p>{user.email}</p>
                                    {/* <a href="user-profile.html" class="btn btn-main-sm">Edit Profile</a> */}
                                </div>
                                <div class="widget user-dashboard-menu">
                                    <ul>
                                        <li><a href="/user-dashboard"><i class="fa fa-bookmark-o"></i> My Events</a></li>
                                        <li class="active"><a href="/vendor-list"><i class="fa fa-user"></i> Vendors</a></li>

                                    </ul>
                                </div>


                                <div class="modal fade" id="deleteaccount" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header border-bottom-0">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body text-center">
                                                <img src="/images/account/Account1.png" class="img-fluid mb-2" alt="" />
                                                <h6 class="py-2">Are you sure you want to delete your account?</h6>
                                                <p>Do you really want to delete these records? This process cannot be undone.</p>
                                                <textarea name="message" id="" cols="40" rows="4" class="w-100 rounded"></textarea>
                                            </div>
                                            <div class="modal-footer border-top-0 mb-3 mx-5 justify-content-lg-between justify-content-center">
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
                            <div class="widget dashboard-container my-adslist">
                                <h3 class="widget-header">My Ads</h3>
                                <table class="table table-responsive product-dashboard-table">
                                    <thead>
                                        <tr>
                                            <th>Vendor Name</th>
                                            <th class="text-center">Mobile</th>
                                            <th class="text-center">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vendors.map((obj) => {
                                            return (<tr>

                                                <td class="product-details">
                                                    <p>{obj.vname}</p></td>
                                                <td class="product-category">
                                                <p>{obj.vmob}</p>
                                                </td>
                                                <td class="product-category">
                                                <p>{obj.vadd}</p>
                                                </td>
                                            </tr>)
                                        })
                                        }

                                    </tbody>
                                </table>

                            </div>



                        </div>
                    </div>
                </div>
            </section>
            <Logo/>
            <Bottom/>
        </React.Fragment>
    )
}

export default VendorList;