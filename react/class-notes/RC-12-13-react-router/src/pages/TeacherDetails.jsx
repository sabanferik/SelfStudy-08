import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TeacherDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [kisi, setKisi] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((veri) => setKisi(veri));
  }, [id]);
  // useEffect te [] içini boş bırakabilirim. çünkü zaten bu sayfaya kisi tıklanınca o kisinin id  si ile geliniyor ve bu sayfa tekrar çalışıyor, ama syntax gereği, id ye bağlı çalıştığı için [] içine id değiştiğinde çalış komutu verirsek herkes mutlu olur, yapmazsakta hata almayız
  //navigate(-sayı) ile sayı kaçsa o kadar sekme geri döner, yani sayı 2 ise 2 önce ziyaret ettiğimiz sayfaya döner

  return (
    <div className="container text-center mt-4">
      <div>
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${kisi.name}`}
          alt=""
          width="300px"
        />
        <h4>{kisi.username} </h4>
        <h5>{kisi.name} </h5>
        <h5>{kisi.phone} </h5>
        <h5>{kisi.website} </h5>
        <h5>{kisi.email} </h5>
      </div>
      <div>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          GO BACK
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          GO HOME
        </button>
      </div>
    </div>
  );
}

export default TeacherDetails