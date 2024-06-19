import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const UserProfile = ({name, details, city, country}) => {
    return (<div>
        {name.length == 0 && <p>Unknown profile</p>}
        {name.length > 0 && <p>Name: {name}</p>}
        {details != null && 
        <div>
           <p>Company: {details['company_name']}</p>
           <p>First: {details['first_name']}</p>
           <p>Last: {details['last_name']}</p>
           <p>VAT: {details['vat_number']}</p>
           <p>Email: {details['email']}</p>
           <p>Website: {details['website']}</p>
           <p>Phone: {details['phone']}</p>
           <p>Address: {details['number']}, {details['street']} {details['street2']}<br/>
           {city['post_code']} {city['name']}<br/>
           {country['name']}</p>
           <p>Logo: <img src={"/logos/" + details['logo']} /></p>
        </div>}
    </div>);
};

export default UserProfile;