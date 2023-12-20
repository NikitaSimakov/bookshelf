"use client";
import Link from "next/link";
import style from "./modal.module.scss";
import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect, useRef } from "react";
import CardInfo from "./CardInfo";
import { getBookById } from "@/services/getBooks";

interface IModal {
  children: React.ReactNode;
  params: {
    id: string;
    category: string;
  };
}

const Modal = () =>
  // { children }: { children: React.ReactNode }
  {
    const searchParams = useSearchParams();
    const id = searchParams.get("modal");
    const path = usePathname();
    // const dialogRef = useRef<null | HTMLDialogElement>(null);
    // useEffect(() => {
    //   if (id) {
    //     dialogRef.current?.showModal();
    //   } else {
    //     dialogRef.current?.close();
    //   }
    // }, [id]);

    // const bookById = id && getBookById(id);
    // const books = () => {
    //   if (id) {
    //     return (bookById = getBookById(id).then((res) => res));
    //   }
    // };

    const dialog: JSX.Element | null = id ? (
      <div className={style.overlay}>
        <dialog
          // ref={dialogRef}
          className={style.modal}
        >
          <button>
            <Link
              href={path !== "/books/all" ? path : "/books"}
              replace
              scroll={false}
            >
              x
            </Link>
          </button>
          <h1>This is modal window {id}</h1>
          <CardInfo id={id} />
          {/* {children} */}
        </dialog>
      </div>
    ) : null;

    return dialog;
  };

export default Modal;
