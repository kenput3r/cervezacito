import React from 'react'
import styled from "styled-components"

const PrivateEvents = () => {
  return (
    <Component>
      <h2>BOOK AN EVENT</h2>
      <div className="info">
        <p>We host private events for up to 100 people. To get more information on booking a private event with us, please fill out the form below.</p>
      </div>
      <div className="row">
        <div>
          <form name="Event" method="Post" data-netlify="true">
            <input type="hidden" name="form-name" value="Event" />
            <div>
              <label htmlFor="Name">Name
                <input type="text" name="Name" id="Name" />
              </label>
            </div>

            <div>
              <label htmlFor="Email">Email
                <input type="email" name="Email" id="Email" />
              </label>
            </div>

            <div>
              <label htmlFor="Phone">Phone
                <input type="tel" name="Phone" id="Phone" />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="Guests">
                Party Size
                <select name="Guests" id="Guests">
                  <option value="10 - 20">10 - 20</option>
                  <option value="20 - 40">20 - 40</option>
                  <option value="40+">40+</option>
                </select>
              </label>

              <label htmlFor="Date">
                Date
                <input type="date" name="Date" id="Date" />
              </label>
            </div>

            <div>
              <input type="submit" value="REQUEST DATE" />
            </div>
          </form>
        </div>
      </div>
    </Component>
  )
}

export default PrivateEvents

const Component = styled.div`
  font-family: myriad-pro, sans-serif;

  h2 {
    margin-top: 1.45rem;
    text-align: center;
  }
  .info {
    width: 480px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    > div {
      padding: 1.45rem;
      width: 480px;
    }
  }

  form {
    > div {
      margin-bottom: 1rem;
    }
  }

  label {
    display: block;
    font-family: myriad-pro, sans-serif;
  }

  input, textarea {
    display: block;
    width: 100%;
  }

  select {
    display: block;
  }

  input[type="submit"] {
    background-color: #a64023;
    border: 0;
    color: #fff;
    font-weight: bold;
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  .form-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`