import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoIosPhonePortrait } from 'react-icons/io';

type Props = {
  name: string;
  email: string;
  picture: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  cell: string;
  nat: string;
};

const UserCard: React.FC<Props> = ({
  state,
  cell,
  city,
  country,
  email,
  gender,
  name,
  phone,
  nat,
  picture
}: Props) => {
  return (
    <div className="shadow-lg rounded-md p-4 w-75 bg-muted min-w-[250px]">
      <div className="relative bg-primary h-20 flex items-center p-2 rounded-md">
        <img
          src={picture}
          className="w-12 h-12 rounded-lg absolute top-4 left-4"
        />
        <div className="ml-16">
          <p className="text-lg font-bold text-gray-800">{name}</p>
          <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
            <FaPhone /> {phone}
          </p>
        </div>
      </div>
      <div className="bg-card p-4 rounded-md mt-4">
        <p className="text-foreground">{email}</p>
        <p className="text-foreground">{gender}</p>
        <p className="flex items-center gap-2 text-foreground">
          <IoIosPhonePortrait />
          {cell}
        </p>
        <p className="text-foreground">
          {city}, {state}
        </p>
        <p className="text-foreground">
          {country} - {nat}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
