"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function page() {
  const [topicname, setTopicname] = useState("");
  const [description, setDescription] = useState("");
  const [id_1, setId_1] = useState("");
  const [url, setUrl] = useState("");
  const router = useRouter();

  const getTopicdetails = async () => {
    var currentURL = window.location.href;
    var urlParts = currentURL.split("/");

    setId_1(urlParts[urlParts.length - 1]);
    setUrl(`/api/topics/${id_1}`);

    const res = (await axios.get(url)).data.body;
    // console.log(res.data);
    setTopicname(res.title);
    setDescription(res.description);
  };
  const updateTopic = async () => {
    if (topicname === "" || description === "") {
      alert("Please fill all the fields");
      return;
    }

    const res = await axios.put(url, {
      newTitle: topicname,
      newDescription: description,
    });

    // console.log(res);
    if (res.status === 200) {
      // alert("Topic updated successfully");
      router.push("/");
    } else {
      alert(res.data.body.message);
    }
  };

  useEffect(() => {
    getTopicdetails();
  }, [url]);

  return (
    <>
      <div className="main w-[70%] bg-fuchsia-200 p-4 mx-auto rounded-2xl mt-8  flex ">
        <form
          className="flex flex-col gap-4 w-[88%] mx-auto text-2xl mt-8"
          action=""
        >
          {/* <h1>{url}</h1> */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Topic name"
            className="p-3 rounded-lg w-full"
            value={topicname}
            onChange={(e) => {
              setTopicname(e.target.value);
            }}
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Write Description......."
            className="p-3 rounded-lg"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <button
            type="button"
            className="p-2 bg-sky-300 rounded-xl mx-auto w-[80%] mt-5 mb-4 font-semibold"
            onClick={() => {
              updateTopic();
            }}
          >
            Update Topic
          </button>
        </form>
      </div>
    </>
  );
}
