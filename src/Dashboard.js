import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddUser from ".././src/compo/AddUser.js";
import UserList from ".././src/compo/UserList.js";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                {" "}
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>12,361</h3>
                      <p>Interactions </p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>4,31,225</h3>
                      <p>Budget spent</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>32,441</h3>
                      <p>New</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>1,325,134</h3>
                      <p>Traffic Received</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-7 connectedSortable">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Distribution of contact
                      </h3>
                      <div className="card-tools">
                        <ul className="nav nav-pills ml-auto">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#revenue-chart"
                              data-toggle="tab"
                            >
                              Area
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#sales-chart"
                              data-toggle="tab"
                            >
                              Pie Chart
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content p-0">
                        {/* Morris chart - Sales */}
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{ position: "relative", height: 300 }}
                        >
                          <canvas
                            id="revenue-chart-canvas"
                            height={300}
                            style={{ height: 300 }}
                          />
                        </div>
                        <div
                          className="chart tab-pane"
                          id="sales-chart"
                          style={{ position: "relative", height: 300 }}
                        >
                          <canvas
                            id="sales-chart-canvas"
                            height={300}
                            style={{ height: 300 }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  {/* DIRECT CHAT */}
                  <div className="card direct-chat direct-chat-primary">
                    {/* /.card-header */}

                    {/* /.card-body */}

                    {/* /.card-footer*/}
                  </div>
                  <div className="p-3 mb-2 bg-secondary text-white">
                    <AddUser />
                  </div>

                  {/*/.direct-chat */}
                  {/* TO DO List */}
                </section>
                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                <section className="col-lg-5 connectedSortable">
                  {/* Map card */}
                  <div className="card bg-gradient-primary">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-map-marker-alt mr-1" />
                        Geography
                      </h3>

                      {/* card tools */}
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm daterange"
                          data-toggle="tooltip"
                          title="Date range"
                        >
                          <i className="far fa-calendar-alt" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          data-card-widget="collapse"
                          data-toggle="tooltip"
                          title="Collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                      </div>
                      {/* /.card-tools */}
                    </div>
                    <div className="card-body">
                      <div
                        id="world-map"
                        style={{ height: 250, width: "100%" }}
                      />
                    </div>
                    {/* /.card-body*/}
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="col-4 text-center">
                          <div id="sparkline-1" />
                          <div className="text-white">Visitors</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <div id="sparkline-2" />
                          <div className="text-white">Online</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <div id="sparkline-3" />
                          <div className="text-white">Sales</div>
                        </div>
                        {/* ./col */}
                      </div>
                      {/* /.row */}
                    </div>
                  </div>
                  {/* /.card */}

                  {/* solid sales graph */}
                  <div className="card bg-gradient-info">
                    <div className="card-header border-0">
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Conversion %
                      </h3>
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn bg-info btn-sm"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn bg-info btn-sm"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <canvas
                        className="chart"
                        id="line-chart"
                        style={{
                          minHeight: 250,
                          height: 250,
                          maxHeight: 250,
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="col-4 text-center">
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            defaultValue={25}
                            data-width={60}
                            data-height={60}
                            data-fgcolor="#39CCCC"
                          />
                          <div className="text-white">Contacts</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            defaultValue={25}
                            data-width={60}
                            data-height={60}
                            data-fgcolor="#39CCCC"
                          />
                          <div className="text-white">Email ids </div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            defaultValue={25}
                            data-width={60}
                            data-height={60}
                            data-fgcolor="#39CCCC"
                          />
                          <div className="text-white">Social</div>
                        </div>

                        {/* ./col */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                  {/* Calendar */}

                  {/* /.card */}
                </section>

                {/* right col */}
              </div>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}
