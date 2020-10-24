import Client from './guildedjs/structures/Client';
import GuildedAPIError from './rest/GuildedAPIError';
import GuildedJSError from './guildedjs/structures/GuildedJSError';

import Channel from './guildedjs/structures/Channel';
import Message from './guildedjs/structures/Message';
import MessageReaction from './guildedjs/structures/MessageReaction';
import Role from './guildedjs/structures/Role';
import Team from './guildedjs/structures/Team';
import User from './guildedjs/structures/User';

import ChannelManager from './guildedjs/structures/managers/ChannelManager';
import ChannelMessageManager from './guildedjs/structures/managers/ChannelMessageManager';
import TeamChannelManager from './guildedjs/structures/managers/TeamChannelManager';
import TeamRoleManager from './guildedjs/structures/managers/TeamRoleManager';
import TeamManager from './guildedjs/structures/managers/TeamManager';
import UserManager from './guildedjs/structures/managers/UserManager';

export default Client;
export {
    Client,
    GuildedAPIError,
    GuildedJSError,
    Channel,
    Message,
    MessageReaction,
    Role,
    Team,
    User,
    ChannelManager,
    ChannelMessageManager,
    TeamChannelManager,
    TeamRoleManager,
    TeamManager,
    UserManager,
};
