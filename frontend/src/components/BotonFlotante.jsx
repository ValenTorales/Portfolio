import { useNavigate } from "react-router-dom";

export default function BotonFlotante() {
    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="button-flotante">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    >
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12H4.5m0 0l6.75 6.75M4.5 12l6.75-6.75"
    />
    </svg>
    </button>
  );
}
