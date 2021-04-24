const MenuIcon: React.FC = () => {
  return (
    <div className="w-6 h-6 flex items-center">
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </div>
  )
}

export default MenuIcon
