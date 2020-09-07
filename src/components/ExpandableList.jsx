import React, { useState } from "react";
import styled, { css } from "styled-components";
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { useMeasure } from 'react-use'

export const StyledListItem = styled.li`
  padding: 0;
  margin: 0;
  &:not(:last-child) {
    padding-bottom: 1em;
  }

   span{
  cursor: ${({ canExpand }) => canExpand ? 'pointer' : 'default'};
  }
   span:first-child{
    color: ${({ theme }) => theme.colors.interactive};
    padding-right: .25em;
  }


  &:hover{
     span:first-of-type{
    color: ${({ theme }) => theme.colors.interactiveHover};
    }
  }

`;

export const StyledList = styled(motion.div)`
overflow: hidden;
  ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: hidden;
    padding-left: 1em;
  }
  ul{
    border-left: solid 1px ${({ theme }) => theme.colors.white};
    & ul {
      margin: .5em 0 ;
      border-left: solid 1px ${({ theme }) => theme.colors.mediumGrey};
    }
  }
`;

export const StyledMarkdownList = styled.div``;

export const ListItem = ({ children }) => {
  const canExpand = React.Children.count(children) > 1;
  const [isExpanded, setIsExpanded] = useState(false);

  return <StyledListItem canExpand={canExpand} isExpanded={isExpanded}>


    {React.Children.map(children, (child, index) => {
      const newProps = { isNested: canExpand, isExpanded: isExpanded };
      if (index === 0 && canExpand) {
        return (
          <div onClick={() => setIsExpanded(!isExpanded)}>
            <>
              {canExpand && (
                <span>
                  ({!isExpanded ? '+' : '-'})
                </span>
              )}
              <span>
                {React.cloneElement(child, { ...newProps })}
              </span>
            </>
          </div>
        )
      }
      return React.cloneElement(child, newProps)
    })}


  </StyledListItem >;
};

export const List = ({ children, isExpanded = true, canExpand }) => {
  const [ref, bounds] = useMeasure();
  const containerAnimation = {
    height: isExpanded ? bounds.height : 0
  }
  const listAnimation = {
    opacity: isExpanded ? 1 : 0
  }

  return (
    <StyledList animate={containerAnimation}>
      <motion.ul ref={ref} animate={listAnimation}>
        {children}
      </motion.ul>
    </StyledList>
  );
};
