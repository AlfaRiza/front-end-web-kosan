import React from 'react';
import propTypes from 'prop-types';

export default function MostPicked(props) {
    return (
        <section className="container">
            <h4 className="mb-3">Most Picked</h4>
            <div className="row">
                <div className="col-4">
                    <div className="card h-100"></div>
                </div>
                <div className="col-8">
                    <div className="row mb-3">
                        <div className="col-6">
                            <div className="card">

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">

                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <div className="card">

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}