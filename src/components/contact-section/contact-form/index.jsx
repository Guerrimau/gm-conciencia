"use client";

import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";

const inputStyleProps = {
  color: "primary",
  size: "lg",
  type: "text",
  variant: "flat",
};

const INITIAL_STATE = {
  name: "",
  email: "",
  cel: "",
};

export const ContactForm = () => {
  const [formValues, setFormValues] = useState(INITIAL_STATE);
  const [loading, setIsLoading] = useState(false);

  const onChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSendClick = async () => {
    setIsLoading(true);
    await fetch("/api", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setFormValues(INITIAL_STATE);
    setIsLoading(false);
  };

  return (
    <div className="w-full md:w-[450px] space-y-5 flex flex-col mt-5 md:mt-0">
      <p className="text-zinc-500">Ingresa tus datos</p>
      <Input
        {...inputStyleProps}
        label="Nombre"
        name="name"
        value={formValues.name}
        onChange={onChange}
      />
      <Input
        {...inputStyleProps}
        label="Correo"
        name="email"
        value={formValues.email}
        onChange={onChange}
      />
      <Input
        {...inputStyleProps}
        label="Celular"
        name="cel"
        value={formValues.cel}
        onChange={onChange}
      />
      <Button
        className="w-full md:w-fit self-end"
        size="lg"
        variant="solid"
        color="primary"
        isLoading={loading}
        onClick={onSendClick}
      >
        Enviar
      </Button>
    </div>
  );
};
