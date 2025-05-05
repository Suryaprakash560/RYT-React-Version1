import React from "react";

export default function UserManagmnt (){
    return(
        <div className="Inner_Contaner">
            <h2 className="Heading-h2">User Management</h2>
            <div className="Inside-Content-container">
                <div className="row w-100 mx-auto">
                    <div className="col-12 col-sm-12 col-lg-8 col-md-8 col-lg-8">
                        <h4 className="Heading-h4 text-center">View</h4>
                        <div className="content-div">
                            <div className="row">
                                <div className="col-6 col-sm-6 col-lg-4 col-md-4 col-xl-4">
                                    <div className="UserCard">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 col-md-4 col-lg-4">
                    <h4 className="Heading-h4 text-center">Add</h4>
                    <div className="content-div"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}