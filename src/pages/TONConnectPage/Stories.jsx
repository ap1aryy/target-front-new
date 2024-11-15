import {
  Section,
  Chip,
  Title,
  Cell,
  List,
  Button,
  Image,
  Card,
  Info,
  AvatarStack,
  Avatar,
  Badge,
  Divider,
  Placeholder,
  Subheadline,
  Text,
} from "@telegram-apps/telegram-ui";

import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { UserContext } from "@/contexts/UserContext";

/**
 * @returns {JSX.Element}
 */

export function StoriesPage() {
  const location = useLocation();
  const [chapters, setChapters] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <List></List>
    </div>
  );
}
