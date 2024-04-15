"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEvent, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import CardInfo from "../Card/CardInfo";
import style from "./modal.module.scss";
import { useBooks } from "@/store/store";

const Modal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams!.get("modal");
  const pathname = usePathname()!;
  const resetBook = useBooks((state) => state.resetBook);

  const handleCloseModal = () => {
    router.push(!pathname ? "/books/all" : pathname, {
      scroll: false,
    });
    resetBook();
  };

  useEffect(() => {
    id && document.body?.classList.add("hidden");
    !id && document.body?.classList.remove("hidden");
  }, [id]);

  useEffect(() => {
    const onEscModalClose = (event: KeyboardEventInit) => {
      if (event.key === "Escape") handleCloseModal();
    };

    id && window.addEventListener("keydown", onEscModalClose);
    return () => {
      window.removeEventListener("keydown", onEscModalClose);
    };
  }, [id]);

  const onEscTapHandler = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  const dialog: JSX.Element | null = id ? (
    <div onClick={(event) => onEscTapHandler(event)} className={style.overlay}>
      <dialog className={style.modal}>
        <button className={style.closeButton} onClick={handleCloseModal}>
          <IoClose className={style.closeIcon} />
        </button>
        <CardInfo />
      </dialog>
    </div>
  ) : null;

  return dialog;
};

export default Modal;
