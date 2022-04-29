import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import WidgetContainer from "./WidgetContainer";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState();
  const valid = typeof __GATSBY_PLUGIN_MAILCHIMP_ADDRESS__ === "string";
  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email)
      .then((data) => {
        setMsg(data.msg);
      })
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    valid && (
      <WidgetContainer className="widget widget-newsletter" title="Newsletter">
        {msg ? (
          <p dangerouslySetInnerHTML={{ __html: msg }} />
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email address"
              name="email"
              type="email"
              required
              value={email}
              onChange={handleChange}
              aria-label="Subscribe with your email address"
              height="auto"
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </WidgetContainer>
    )
  );
}
