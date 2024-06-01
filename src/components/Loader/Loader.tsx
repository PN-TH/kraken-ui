import React from 'react';
import classNames from 'classnames';

export interface LoaderProps {
  linear?: boolean;
  speed?: number;
  color?: string;
  width?: string;
  size?: string;
}

export default function Loader({
  linear = false,
  speed = 1.5,
  color,
  size = 'medium',
}: React.PropsWithChildren<LoaderProps>) {
  const speedStyle = {
    animationDuration: `${speed}s`,
  };
  const isHexColor = (color: string) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

  const circularStyle = {
    small: 'border-2 border-t-2 h-6 w-6',
    medium: 'border-4 border-t-4 h-10 w-10',
    large: 'border-4 border-t-4 h-16 w-16',
  }[size];

  const linearStyle = {
    small: 'h-0.5',
    medium: 'h-1',
    large: 'h-2',
  }[size];

  return (
    <div
      className={classNames('flex items-center justify-center')}
      data-testid="loader"
    >
      {!linear ? (
        <div
          role="status"
          className={classNames(
            `border-4 border-t-4 border-gray-200 rounded-full border-t-primary animate`,
            'animate-spin',
            circularStyle,
          )}
          style={
            color && isHexColor(color)
              ? { ...speedStyle, borderTopColor: color }
              : speedStyle
          }
        ></div>
      ) : (
        <div
          className={`relative  w-full overflow-hidden bg-gray-200 ${linearStyle}`}
          role="status"
        >
          <div
            className={classNames(
              `absolute left-0 top-0 h-full w-1/4  bg-primary`,
              'animate-linear-progress',
            )}
            style={
              color && isHexColor(color)
                ? { ...speedStyle, backgroundColor: color }
                : speedStyle
            }
            data-testid="linear-loader"
          ></div>
        </div>
      )}
    </div>
  );
}
