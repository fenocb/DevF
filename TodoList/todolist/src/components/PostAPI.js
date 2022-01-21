import React, { useEffect, useState } from "react";

const PosAPI = () => {
  const APIUrl = "http://localhost:2500/task";

    const PostAPIData = async () => {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    const response = await fetch('https://reqres.in/api/posts', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
}
}
