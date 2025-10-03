
const ChatButton = () => {
//   const navigate = useNavigate();

  return (
    <button
    //   onClick={() => navigate("/chat")}
      className="fixed bottom-5 right-5 w-14 h-14 bg-pink-900 hover:bg-pink-800 text-white rounded-full shadow-xl flex items-center justify-center z-50 transition-all"
      title="Chat with Sipra"
    >
      💬
    </button>
  );
};

export default ChatButton;