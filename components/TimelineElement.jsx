"use client"

import { useIsVisible } from "@/lib/hooks";
import { Fragment, useRef } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function TimelineElement({ children, ...props }) {
    const ref = useRef();

    const isVisible = useIsVisible(ref);

    return (
        <Fragment>
            <VerticalTimelineElement visible={isVisible} {...props}>
                <div ref={ref} className="" />
                {children}
            </VerticalTimelineElement>
        </Fragment>
    )
}