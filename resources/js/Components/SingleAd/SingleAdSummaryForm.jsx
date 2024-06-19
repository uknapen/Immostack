import React from "react";

const SingleAdSummaryForm = ({ ad }) => {
    return (
        <form action="/" className="flex flex-col gap-2">
            <textarea
                name="message"
                id="contact-message"
                defaultValue={`I'm interested in this property. I'd like to have more information.`}
            ></textarea>
            <input
                type="text"
                name="name"
                placeholder="Your name"
                className="contact-input"
            />
            <input
                type="email"
                name="email"
                placeholder="Your email"
                className="contact-input"
            />
            <input
                type="tel"
                name="phone"
                placeholder="Your phone"
                className="contact-input"
            />
            <button type="button" className="contact-submit">
                <a href={`mailto:${ad.user_email}`}>Send message</a>
            </button>
        </form>
    );
};

export default SingleAdSummaryForm;
