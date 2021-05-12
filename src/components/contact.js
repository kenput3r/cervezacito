import React from 'react'
import styled from "styled-components"

const Contact = () => {
  return (
    <Component>
      <h2>GET IN TOUCH</h2>
      <div className="row">
        <div>
          <form name="Contact" method="Post" data-netlify="true">
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

            <div>
              <label htmlFor="Message">Message
                <textarea name="Message" id="Message"></textarea>
              </label>
            </div>

            <div>
              <input type="submit" value="SEND MESSAGE" />
            </div>
          </form>
        </div>

        <div>
          <p><a href="tel:7148523529">(714) 852-3529</a></p>
          <div className="hours">
            <p><span>MON - THU:</span> <span>5 PM - 10 PM</span></p>
            <p><span>FRI:</span> <span>4 PM - 12 AM</span></p>
            <p><span>SAT:</span> <span>11 AM - 12 AM</span></p>
            <p><span>SUN:</span> <span>11 AM - 8 PM</span></p>
          </div>
        </div>
      </div>
    </Component>
  )
}

export default Contact

const Component = styled.div`
  font-family: myriad-pro, sans-serif;

  h2 {
    margin-top: 1.45rem;
    text-align: center;
  }
  .row {
    display: flex;
    flex-direction: row;
    > div {
      padding: 1.45rem;
      width: 320px;
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

  a {
    color: #a64023;
    font-weight: bold;
  }

  .hours {
    p {
      margin-bottom: 2px;
      span:nth-of-type(1) {
        display: inline-block;
        font-weight: bold;
        min-width: 120px;
      }
    }
  }
  @media (max-width: 767px) {
    .row {
      flex-wrap: wrap-reverse;
      > div {
        flex: none;
        width: 100%;
      }
    }
  }
`