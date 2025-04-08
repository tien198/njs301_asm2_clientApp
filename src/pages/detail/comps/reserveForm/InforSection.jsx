import useStoreReserveForm from '../../store'

function ReserveForm_Infor() {

  const {
    fullName, setFullName,
    email, setEmail,
    phone, setPhone,
    cardNumber, setCardNumber,
  } = useStoreReserveForm()

  return (
    <div>
      <h6 className="text-xl font-semibold">Reserve Info</h6>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full border px-4 py-4 rounded mb-2"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-4 py-4 rounded mb-2"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border px-4 py-4 rounded mb-2"
      />

      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        className="w-full border px-4 py-4 rounded mb-2"
      />
    </div>
  );
}

export default ReserveForm_Infor;
