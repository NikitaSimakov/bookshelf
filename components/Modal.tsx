"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEvent, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import CardInfo from "./CardInfo";
import style from "./modal.module.scss";

// interface IModal {
//   children: React.ReactNode;
//   params: {
//     id: string;
//     category: string;
//   };
// }

const Modal = () =>
  // { children }: { children: React.ReactNode }
  {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams!.get("modal");
    const pathname = usePathname()!;

    useEffect(() => {
      id && document.body?.classList.add("hidden");
      !id && document.body?.classList.remove("hidden");
    }, [id]);

    useEffect(() => {
      const onEscModalClose = (event: KeyboardEventInit) => {
        if (event.key === "Escape") {
          router.push(!pathname ? "/books/all" : pathname, {
            scroll: false,
          });
        }
      };
      id && window.addEventListener("keydown", onEscModalClose);
      return () => {
        window.removeEventListener("keydown", onEscModalClose);
      };
    }, [id]);

    const onEscTapHandler = (
      event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
      if (event.target === event.currentTarget)
        router.push(!pathname ? "/books/all" : pathname, {
          scroll: false,
        });
    };

    const dialog: JSX.Element | null = id ? (
      <div
        onClick={(event) => onEscTapHandler(event)}
        className={style.overlay}
      >
        <dialog className={style.modal}>
          <button
            className={style.closeButton}
            onClick={() =>
              router.push(!pathname ? "/books/all" : pathname, {
                scroll: false,
              })
            }
          >
            <IoClose className={style.closeIcon} />
          </button>
          <CardInfo />
        </dialog>
      </div>
    ) : null;

    return dialog;
  };

export default Modal;
